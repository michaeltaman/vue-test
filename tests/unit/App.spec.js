import App from "@/App.vue";
import { mount } from "@vue/test-utils";

describe("Counter", () => {
  let wrapper;

  const findButtonByText = (btnText) =>
    wrapper.findAll("button").wrappers.find((w) => w.text() === btnText);

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
});
