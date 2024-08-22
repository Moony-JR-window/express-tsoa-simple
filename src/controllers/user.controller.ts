import { Controller, Route, Get,} from 'tsoa';

@Route("/v1/users")
export class UserController extends Controller {

    @Get("/hello/jest")
    public helloJest(): string {
        return "Hello Docker demo! Hello 1111";
    }
    
}
