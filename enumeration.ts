enum Environment {
        Local = "Local",
        Development = "Development",
        Staging = "Staging",
        Production = "Production"
}

function runTests(env : Environment) : void {
    
    console.log(`Tests are running in the ${env} environment `);
    
}
runTests(Environment.Local);
runTests(Environment.Development);
runTests(Environment.Staging);
runTests(Environment.Production);

