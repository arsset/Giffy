import { act, renderHook } from '@testing-library/react-hooks'
import useForm from './hooks'

const setup = ( params ) => renderHook( () => useForm( params ))

test('should change keyword', () => {
    const { result} = setup();

    act(() =>{

        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman');
 })

 test('should use initial values', () =>{

    const { result } = setup({
        initialKeyword: 'matrix'
    });

    expect( result.current.keyword ).toBe('matrix');


 })

 test('should update correctly times when use twice', () =>{

    const { result} = setup();

    act(() =>{

        result.current.updateKeyword('ba')
        result.current.updateKeyword('bat')
    })

    expect(result.current.keyword).toBe('bat');
    expect(result.current.times).toBe(2);


 })

 test('should change keyword with blank text', () => {
    const { result } = setup();

    act(() =>{

        result.current.updateKeyword('')
    })

    expect(result.current.keyword).toBe('');
 })