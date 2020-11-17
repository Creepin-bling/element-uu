import input from '../src/input.vue'
import {mount} from '@vue/test-utils'
import { testMatch } from '../../../jest.config'

describe('lg-input',()=>{
    test('input-text',()=>{
        // 挂载组件
        const wrapper=mount(input)
        expect(wrapper.html()).toContain('input type="text')
    })

    test('input-password',()=>{
        const wrapper=mount(input,{
            propsData:{
                type:'password',
            }
        })
        expect(wrapper.html()).toContain('input type="password')
    })

    test('input-password',()=>{
        const wrapper=mount(input,{
            propsData:{
                type:'password',
                value:'admin'
            }
        })
        expect(wrapper.props('value')).toBe('admin')
    })

    // 快照

    test('input-password',()=>{
        const wrapper=mount(input,{
            propsData:{
                type:'password',
                value:'admin'
            }
        })
        expect(wrapper.vm.$el).toMatchSnapshot
    })
})