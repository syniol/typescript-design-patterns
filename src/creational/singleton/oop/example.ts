import { Container } from './container'

describe('Container OOP Programing Example', () => {
    let sut: Container

    beforeAll(() => {
        sut = Container.getInstance()
    })

    describe('given no service is injected when I request to an alias of service', () => {
        it('should throw an error', () => {
            expect(() => sut.get('SomeService')).toThrow('Alias is not defined')
        })
    })

    describe('given service is being added to container', () => {
        beforeAll(() => {})

        describe('when try to get injected service by alias', () => {
            it('should bring back an object associated with alias', () => {
                const mockObject = jest.fn()
                sut.add(new mockObject())

                expect(sut.get('mockConstructor')).toBeDefined()
            })

            describe('when Container instantiated again', () => {
                beforeAll(() => {
                    Container.getInstance()
                })

                it('should still keep the state and bring back an object associated with alias', () => {
                    expect(sut.get('mockConstructor')).toBeDefined()
                })
            })
        })
    })
})
