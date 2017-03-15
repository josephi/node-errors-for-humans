# Node Errors for Humans

A nice lib to get more detailed description for System Error messages get from nodejs, based on Error code.

The lib supports multilanguage, easy it is very easy to change the message for each code.

The messages in english were taken from the nodejs docs [link](https://nodejs.org/api/errors.html#errors_common_system_errors)

## Installation

```
npm install node-errors-for-humans --save
```

## Usage

```
var errorForHumans = require("node-errors-for-humans");

try {
    ...
} catch(err) {
    // err.code == "ECONNREFUSED"
    err.toHumans();
}
// output: (Connection refused): No connection could be made because the target machine actively refused it. This usually results from trying to connect to a service that is inactive on the foreign host. (ECONNREFUSED)
```

## Change localization

```
var errorForHumans = require("node-errors-for-humans");
errorForHumans.humanLanguage = "en";
```

## Add a new language

```
var errorForHumans = require("node-errors-for-humans");
errorForHumans.setMessageDictionary({
    "ECONNREFUSED": "A conexao foi rejeitada"
}, "pt-br");
```

## Changing a specific message

```
var errorForHumans = require("node-errors-for-humans");
errorForHumans.setCodeHumanMessage("ECONNREFUSED", "A conexao foi rejeitada!", "pt-br");
```
