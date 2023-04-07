<?php
class ArgsWriter {
        public function writeJson($args) {
            $json = array();
            foreach ($args as $key => $value) {
                if (is_numeric($value)) {
                    $json[$key] = $value + 0; // ensures the number is treated as a number and not a string
                } elseif (is_bool($value)) {
                    if ($value === true) {
                        $json[$key] = true;
                    }
                } else {
                    $json[$key] = (string) $value;
                }
            }
            return json_encode($json);
        }
    }