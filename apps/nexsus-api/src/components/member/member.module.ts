import { Module } from '@nestjs/common';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';
import { Mutation, Query } from '@nestjs/graphql';

@Module({
	providers: [MemberResolver, MemberService],
})
export class MemberModule {
	constructor(private readonly memberService: MemberService) {}
	@Mutation(() => String)
	public async signup(): Promise<string> {
		console.log('Mutation sgnup');
		return this.memberService.signup();
	}
	@Mutation(() => String)
	public async login(): Promise<string> {
		console.log('Mutation login');
		return this.memberService.login();
	}
	@Mutation(() => String)
	public async updateMember(): Promise<string> {
		console.log('Mutation updateMember');
		return this.memberService.updateMember();
	}
	@Query(() => String)
	public async getmember(): Promise<string> {
		console.log('Mutation getmember');
		return this.memberService.getmember();
	}
}
