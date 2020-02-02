import { mount } from "@vue/test-utils"
import Logo from "@/components/Logo.vue"
import { describe, expect, test } from "@types/jest"

describe("Logo", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
