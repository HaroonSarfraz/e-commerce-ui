import EventBus from "../config/eventBus";

export function success(message) {
  EventBus.emit('flash', { message: message, type: "success" })
}

export function error(message) {
  EventBus.emit('flash', { message: message, type: "error" })
}

