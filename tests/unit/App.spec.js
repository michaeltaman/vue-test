import App from "@/App.vue";
import { mount } from "@vue/test-utils";

describe('Counter', () => {
  let wrapper;

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
    expect(wrapper.find("#app").text()).toContain("0");
  });
})
