pragma solidity ^0.4.0;

contract Inbox {
    string public message;

    constructor(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string _message) public {
        message = _message;
    }
}
