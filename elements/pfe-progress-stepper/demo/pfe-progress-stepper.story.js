import { storiesOf } from "@storybook/polymer";
import { withActions } from "@storybook/addon-actions";
import * as bridge from "@storybook/addon-knobs";
import * as tools from "../../../.storybook/utils.js";

import PfeProgressStepper from "../dist/pfe-progress-stepper";

const stories = storiesOf("Progress stepper", module);

// Define the template to be used
const template = (data = {}) => {
  return tools.component(PfeProgressStepper.tag, data.prop, data.slots);
};

// Use these to get dynamically generated content
// const defaultHeading = tools.autoHeading(true);
const defaultContent = tools.autoContent(1, 2);

stories.addDecorator(bridge.withKnobs);

stories.add(PfeProgressStepper.tag, () => {
  let config = {};
  const props = PfeProgressStepper.properties;

  //-- Set any custom defaults just for storybook here

  // Trigger the auto generation of the knobs for attributes
  config.prop = tools.autoPropKnobs(PfeProgressStepper);

  const slots = PfeProgressStepper.slots;

  //-- Set any custom content for the slots here

  // Trigger the auto generation of the knobs for slots
  config.has = tools.autoContentKnobs(slots, bridge);

  //-- Build your slots here using config.has[""] to get user content
  // prettier-ignore
  config.slots = [{
    content: defaultContent
  }];

  //-- Reset default values show they don't render in the markup
  // if (config.prop[""] === "default") {
  //   config.prop[""] = "";
  // }

  const rendered = template(config);
  return tools.preview(rendered);
});
