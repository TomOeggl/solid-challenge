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

$argString = '--foo --bar baz --numbers 1';
$parser = new ArgsParser($argString);
$writer = new ArgsWriter();
$reader = new ArgsReader();

$json = $writer->writeJson($parser->getArgs());
$argString2 = $reader->readJson($json);

echo 'Original argument string: '.$argString.'<br>';
echo 'JSON representation: '.$json.'<br>';
echo 'Argument string from JSON: '.$argString2.'<br>';
