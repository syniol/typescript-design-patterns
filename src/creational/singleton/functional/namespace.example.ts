import { Container } from './container.namespace'

describe('Container Functional Programming with Namespace Example', () => {
    let sut = Container.get

    describe('given container is empty when try to find any alias', () => {
        it('should throw an error', () => {
            expect(() => sut('mockConstructor')).toThrow()
        })

        describe('when we add a service to container', () => {
            beforeAll(() => {
              const mockObject = jest.fn()
              Container.add(new mockObject())
            })

            it('should bring back inserted object by alias', () => {
              expect(sut('mockConstructor')).toBeDefined();
            })
        })
    })
})
