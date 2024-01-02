## Lambda Benchmarks

This is a reference directory for benchmark applications targeting specific filesizes for Lambda.

All applications are "hello world", with some exceptions - mostly that they return the timestamp which the handler was executed.

These are meant to be tested along with my somewhat janky [cold start benchmarker](https://github.com/astuyve/cold-start-benchmarker).

These projects are effectively scratchpads for my [stream](twitch.tv/aj_stuyvenberg), and not meant to be deployed.

Note that deploying these with the cold-start benchmarker **will** incur costs, as they create custom cloudwatch metrics.
