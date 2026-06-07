<?php

class LocalDB {
    private $filename;
    private $data = [];

    public function __construct($filename) {
        $this->filename = $filename;
        $this->load();
    }

    private function load() {
        if (file_exists($this->filename)) {
            $content = file_get_contents($this->filename);
            if (preg_match('/<\?php\s*(array\s*\(.*?\))\s*\?>/s', $content, $matches)) {
                $temp = eval('return ' . $matches[1] . ';');
                if (is_array($temp)) {
                    $this->data = $temp;
                }
            }
        }
    }

    private function save() {
        $content = "<?php " . var_export($this->data, true) . " ?>";
        file_put_contents($this->filename, $content);
    }

    public function set($var, $value) {
        $this->data[$var] = $value;
        $this->save();
        return $this;
    }
    
    public function get($var, $default = null) {
        return isset($this->data[$var]) ? $this->data[$var] : $default;
    }
    
    public function clear() {
        $this->data = [];
        $this->save();
        return $this;
    }
    
    public function delete($var) {
        if (isset($this->data[$var])) {
            unset($this->data[$var]);
            $this->save();
            return true;
        }
        return false;
    }

    public function getAll() {
        return $this->data;
    }

    public function has($var) {
        return isset($this->data[$var]);
    }

    public function append($value) {
        $this->data[] = $value;
        $this->save();
        return $this;
    }

    public function prepend($value, $key = null) {
        if ($key !== null) {
            // If key is provided, create new array with this key at the beginning
            $newData = [$key => $value];
            $this->data = $newData + $this->data;
        } else {
            // Without key, prepend as numeric index (will reindex)
            array_unshift($this->data, $value);
            // Reindex to maintain sequential numeric keys
            $this->data = array_values($this->data);
        }
        $this->save();
        return $this;
    }
    public function getLast($count, $preserveKeys = false) {
        if ($count <= 0) {
            return [];
        }
        
        $total = count($this->data);
        if ($total === 0) {
            return [];
        }
        
        if ($count >= $total) {
            return $this->data;
        }
        
        if ($preserveKeys) {
            // Preserve original keys (associative)
            return array_slice($this->data, -$count, $count, true);
        } else {
            // Return with numeric keys starting from 0
            return array_slice($this->data, -$count, $count, false);
        }
    }

    public function getLastReversed($count) {
        $last = $this->getLast($count, false);
        return array_reverse($last);
    }
}

?>