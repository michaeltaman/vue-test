import App from "@/App.vue";
import { mount } from "@vue/test-utils";
//import {nextTick } from "vue";

describe("Counter", () => {
  let wrapper;

  const findPlusButton = () =>
    wrapper.findAll("button").wrappers.find((w) => w.text() === "+");

  const createComponent = () => {
    wrapper = mount(App);
  };

  afterEach(() => {
    wrapper.destroy();
  });

  it("shows 0 when initialized", () => {
    //Arrange
    createComponent();

    //Act

    //Assert
    expect(wrapper.text()).toContain("0");
  });

  it("increments by one when + button clicked", async () => {
    createComponent();
    await findPlusButton().trigger("click"); //newest approach requires  await
    //await nextTick();
    //await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("1");
  });
});
