import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppRessolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { ApolloServerPluginLandingPageLocalDefault as ApolloServer } from '@apollo/server/plugin/landingPage/default';
@Module({
	imports: [
		ConfigModule.forRoot(),
		GraphQLModule.forRoot({
			driver: ApolloDriver,
			playground: false,
			uploads: false,
			autoSchemaFile: true,
			plugins: [ApolloServer()],
		}),
		ComponentsModule,
		DatabaseModule,
	],
	controllers: [AppController],
	providers: [AppService, AppRessolver],
})
export class AppModule {}
