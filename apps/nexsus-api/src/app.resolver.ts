import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppRessolver {
	@Query(() => String)
	public sayHello(): string {
		return 'GraphQL API Server';
	}
}
