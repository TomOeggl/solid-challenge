<?php
   class ArgsReader {
    public function readJson($jsonString) {
        $json = json_decode($jsonString, true);
        $args = array();
        foreach ($json as $key => $value) {
            if ($value === true) {
                $args[] = '--'.$key;
            } else {
                $args[] = '--'.$key.' '.$value;
            }
        }
        return implode(' ', $args);
    }
}