# Observable Entities for EF Core TypeScript Handlebars Templates

Handlebars templates for EF Core scaffolding to generate client-side TypeScript observable entities. See [observable-entities-js](https://github.com/TrackableEntities/observable-entities-js) and [EntityFrameworkCore.Scaffolding.Handlebars](https://github.com/ObservableEntities/EntityFrameworkCore.Scaffolding.Handlebars).

> Blog post: [React to JavaScript object updates with observable-entities-js](https://blog.tonysneed.com/2017/09/21/react-to-javascript-object-updates-with-observable-entities-js/)

## Usage

1. Install **Observable Entities for EF Core TypeScript Handlebars Templates**.

    ```
    dotnet new -i ObservableEntities.Core.Templates.TypeScript
    ```

2. Create a **.NET Core Class Library** project.
3. Add Observable Entities Handlebars templates from the project folder.

    ```
    dotnet new oe-templates-typescript
    ```

4. Add the following NuGet packages to the project.
   - Microsoft.EntityFrameworkCore.Design
   - Microsoft.EntityFrameworkCore.SqlServer
   - EntityFrameworkCore.Scaffolding.Handlebars

5.  Add a `ScaffoldingDesignTimeServices` class that implements `IDesignTimeServices`

    ```csharp
    public class ScaffoldingDesignTimeServices : IDesignTimeServices
    {
        public void ConfigureDesignTimeServices(IServiceCollection services)
        {
            // Add Handlebars scaffolding templates
            services.AddHandlebarsScaffolding(ReverseEngineerOptions.EntitiesOnly, LanguageOptions.TypeScript);
        }
    }
    ```

6. From the command-prompt execute the following:
   - Be sure to create the NorthwindSlim database in SQL Local DB, 
     then run the script from bit.ly/northwindslim.

    ```
    dotnet ef dbcontext scaffold "Data Source=(localdb)\MSSQLLocalDB; Initial Catalog=NorthwindSlim; Integrated Security=True" Microsoft.EntityFrameworkCore.SqlServer -o Models -f
    ```

