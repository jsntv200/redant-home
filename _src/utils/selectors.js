function getParentController(controller, name) {
  return controller.application.getControllerForElementAndIdentifier(
    controller.element.closest(`[data-controller~="${name}"]`),
    name
  );
}

function getChildController(controller, name) {
  const element = controller.element.querySelector(
    `[data-controller~="${name}"]`
  );

  return controller.application.getControllerForElementAndIdentifier(
    element,
    name
  );
}

function getChildControllers(controller, name) {
  const childElements = Array.from(
    controller.element.querySelectorAll(`[data-controller~="${name}"]`)
  );

  const controllers = childElements.map(element => {
    return controller.application.getControllerForElementAndIdentifier(
      element,
      name
    );
  });

  return controllers.filter(controller => controller !== null);
}

function getSiblingController(controller, name) {
  return controller.application.getControllerForElementAndIdentifier(
    controller.element,
    name
  );
}

export {
  getChildController,
  getChildControllers,
  getParentController,
  getSiblingController,
};
