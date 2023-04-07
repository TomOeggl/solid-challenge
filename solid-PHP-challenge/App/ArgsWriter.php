<?php
class ArgsWriter {
        public function writeJson($args) {
            $json = array();
            foreach ($args as $key => $value) {
                if ($value !== true) {
                    $json[$key] = $value;
                } else {
                    $json[$key] = true;
                }
            }
            return json_encode($json);
        }
    }