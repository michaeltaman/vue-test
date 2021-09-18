import App from "@/App.vue";
import { mount } from "@vue/test-utils";

describe("Counter", () => {
  let wrapper;

  const findButtonByText = (btnText) =>
    wrapper.findAll("button").wrappers.find((w) => w.text() === btnText);

  // find ... -> wrapper | undefined
  // Empty wrapper .exists() -> false

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

  it.each`
    buttonText | change                   | expectedResult
    ${"+"}     | ${"increments by one"}   | ${"1"}
    ${"-"}     | ${"deincrements by one"} | ${"-1"}
  `(
    "$change when $buttonText button clicked",
    async ({ buttonText, expectedResult }) => {
      createComponent();
      await findButtonByText(buttonText).trigger("click");
      expect(wrapper.text()).toContain(expectedResult);
    }
  );

  it("shows reset-button when counters is below zero", async () => {
    createComponent();
    wrapper.vm.counter = -1;
    await wrapper.vm.$nextTick();
    // console.log(wrapper.html());
    // debugger;
    //expect(wrapper.find("[data-testid=reset]").exists()).toBe(true); // will overcome
    expect(findButtonByText("Reset").exists()).toBe(true);
  });

  it("does not shows reset-button when counters is not below zero", async () => {
    createComponent();
    wrapper.vm.counter = 1;
    await wrapper.vm.$nextTick();
    expect(wrapper.find("[data-testid=reset]").exists()).toBe(false);
    //expect(findButtonByText("Reset").exists()).toBe(undefined); // will not overcome
  });
});
