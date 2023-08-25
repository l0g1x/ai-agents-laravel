Shared Dependencies:

1. **Agent**: This is a class that is exported and used across multiple files. It represents the main entity of the library.

2. **AgentService**: This is a service class that contains business logic related to the Agent. It is used in the AgentController and AgentServiceTest.

3. **AgentRepository**: This class is responsible for database operations related to the Agent. It is used in the AgentService and AgentRepositoryTest.

4. **AgentController**: This class handles HTTP requests related to the Agent. It is used in the AgentRoutes and AgentControllerTest.

5. **AgentModel**: This is the data model for the Agent. It is used in the AgentRepository, AgentModelTest, and AgentMigration.

6. **AgentRoutes**: This file contains the routes for the Agent. It is used in the index.ts and AgentRoutesTest.

7. **AgentMiddleware**: This file contains middleware functions for the Agent routes. It is used in the AgentRoutes and AgentMiddlewareTest.

8. **AgentException**: This class handles exceptions related to the Agent. It is used in the AgentService, AgentController, and AgentExceptionTest.

9. **AgentValidator**: This class validates data for the Agent. It is used in the AgentController, AgentService, and AgentValidatorTest.

10. **AgentTransformer**: This class transforms data for the Agent. It is used in the AgentController, AgentService, and AgentTransformerTest.

11. **AgentServiceProvider**: This class provides services for the Agent. It is used in the index.ts and AgentServiceProviderTest.

12. **AgentFactory**: This class creates instances of the Agent. It is used in the AgentSeeder, AgentServiceTest, and AgentFactoryTest.

13. **AgentSeeder**: This class seeds the database with Agent data. It is used in the AgentMigration and AgentSeederTest.

14. **AgentMigration**: This class handles database migrations for the Agent. It is used in the AgentSeeder and AgentMigrationTest.

15. **Test Files**: Each test file imports the corresponding class or file it is testing. For example, AgentTest imports Agent, AgentServiceTest imports AgentService, etc.

16. **package.json**: This file contains the project dependencies and scripts. It is used by npm.

17. **tsconfig.json**: This file contains the TypeScript compiler options. It is used by the TypeScript compiler.