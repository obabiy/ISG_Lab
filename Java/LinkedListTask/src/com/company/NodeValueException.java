package com.company;

public class NodeValueException extends Throwable {
    public NodeValueException() {
    }

    public NodeValueException(String message) {
        super(message);
    }

    public NodeValueException(String message, Throwable cause) {
        super(message, cause);
    }

    public NodeValueException(Throwable cause) {
        super(cause);
    }

    public NodeValueException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
