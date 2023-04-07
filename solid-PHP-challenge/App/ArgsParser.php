<?php
class ArgsParser {
        private $args = array();
        public function __construct($argString) {
            $this->parseArgs($argString);
        }
        public function getArgs() {
            return $this->args;
        }
        private function parseArgs($argString) {
            $args = explode(' ', $argString);
            $i = 0;
            while ($i < count($args)) {
                $arg = $args[$i];
                if (substr($arg, 0, 2) === '--') {
                    $key = substr($arg, 2);
                    $value = true;
                    if ($i < count($args) - 1 && substr($args[$i + 1], 0, 2) !== '--') {
                        $i++;
                        $value = $args[$i];
                    }
                    $this->args[$key] = $value;
                }
                $i++;
            }
        }
    }