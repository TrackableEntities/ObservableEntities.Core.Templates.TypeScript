using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.DependencyInjection;

namespace TrackableEntities.Core.Templates.TypeScript.Sample
{
    public class ScaffoldingDesignTimeServices : IDesignTimeServices
    {
        public void ConfigureDesignTimeServices(IServiceCollection services)
        {
            // Add Handlebars scaffolding templates
            services.AddHandlebarsScaffolding(ReverseEngineerOptions.EntitiesOnly, LanguageOptions.TypeScript);
        }
    }
}
