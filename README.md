# script-style-performance

Performance test for script and style tags

## Result

Here's the result from a Macbook11.1:

Title | Total | Load | Render
---   | ---   | ---  | ---
Combined Scripts | 1727 | 985 | 961
Combined Styles | 1437 | 747 | 730
Separated Scripts | 2438 | 1744 | 1729
Separated Styles | 1701 | 1015 | 998

* Total: fetchStart -> loadEventEnd
* Load: domLoading -> loadEventEnd
* Render: domLoading -> domContentLoadedEventStart

## References

* https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming
* https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp?hl=zh-cn
