var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();



app.MapGet("/movies", () => {
    return "get all stored movies";
});

app.MapPost("/movies", () => {
    return "create new movie";
});

app.MapGet("/movies/{Id}", (int Id) =>{
    return $"Get a movie with {Id}";
});

app.Run();
