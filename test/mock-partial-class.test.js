import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";


const repository = new UserRepository();
const service = new UserService(repository);

test('test mock class findById', () => {
    const user = {
        id : 1,
        name : 'ichwan'
    }
    const findByIdMock = jest.spyOn(repository,'findById');
    findByIdMock.mockReturnValueOnce(user);

    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
})