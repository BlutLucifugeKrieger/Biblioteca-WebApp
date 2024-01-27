using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using BibliotecaAPP.Data;
using BibliotecaAPP;
namespace BibliotecaAPP
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<BibliotecaAPPContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("BibliotecaAPPContext") ?? throw new InvalidOperationException("Connection string 'BibliotecaAPPContext' not found.")));

            builder.Services.AddControllers();
            
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            /* 
             * 
             * Se crea una nueva politica para los Cors, ya que de este modo,
               cuando se consuma la api esta va a permitir dicho consumo desde 
               cualquier origen con cualquier encabezado y cualquier metodo aplicado al endpoint
            
            */
            builder.Services.AddCors(options =>
            {

                options.AddPolicy("nuevaPolitica", app =>
                {

                    app.AllowAnyOrigin();
                    app.AllowAnyHeader();
                    app.AllowAnyMethod();
                });



            });
            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

                        if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
};

            app.UseHttpsRedirection();

            /* Indicamos que esta api, empleara la politica de los Cors 
             * que definimos previamente (nuevaPolitica)
             */
               
            app.UseCors("nuevaPolitica");
            app.UseAuthorization();


            app.MapControllers();
            app.Run();
        }
    }
}