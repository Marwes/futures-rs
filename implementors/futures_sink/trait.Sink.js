(function() {var implementors = {};
implementors["futures_sink"] = [];
implementors["futures_util"] = [{text:"impl&lt;F, S&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/try_future/struct.FlattenSink.html\" title=\"struct futures_util::try_future::FlattenSink\">FlattenSink</a>&lt;F, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"futures_core/future/trait.TryFuture.html\" title=\"trait futures_core::future::TryFuture\">TryFuture</a>&lt;Item = S&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;SinkError = F::<a class=\"type\" href=\"futures_core/future/trait.TryFuture.html#associatedtype.Error\" title=\"type futures_core::future::TryFuture::Error\">Error</a>&gt;,&nbsp;</span>",synthetic:false,types:["futures_util::try_future::flatten_sink::FlattenSink"]},{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Fuse.html\" title=\"struct futures_util::stream::Fuse\">Fuse</a>&lt;S&gt;",synthetic:false,types:["futures_util::stream::fuse::Fuse"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/stream/struct.BufferUnordered.html\" title=\"struct futures_util::stream::BufferUnordered\">BufferUnordered</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,&nbsp;</span>",synthetic:false,types:["futures_util::stream::buffer_unordered::BufferUnordered"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Buffered.html\" title=\"struct futures_util::stream::Buffered\">Buffered</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"futures_core/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_core::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,&nbsp;</span>",synthetic:false,types:["futures_util::stream::buffered::Buffered"]},{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/stream/struct.SplitSink.html\" title=\"struct futures_util::stream::SplitSink\">SplitSink</a>&lt;S&gt;",synthetic:false,types:["futures_util::stream::split::SplitSink"]},{text:"impl&lt;Si1, Si2&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/sink/struct.Fanout.html\" title=\"struct futures_util::sink::Fanout\">Fanout</a>&lt;Si1, Si2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Si1: <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Si1::<a class=\"type\" href=\"futures_sink/trait.Sink.html#associatedtype.SinkItem\" title=\"type futures_sink::Sink::SinkItem\">SinkItem</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Si2: <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;SinkItem = Si1::<a class=\"type\" href=\"futures_sink/trait.Sink.html#associatedtype.SinkItem\" title=\"type futures_sink::Sink::SinkItem\">SinkItem</a>, SinkError = Si1::<a class=\"type\" href=\"futures_sink/trait.Sink.html#associatedtype.SinkError\" title=\"type futures_sink::Sink::SinkError\">SinkError</a>&gt;,&nbsp;</span>",synthetic:false,types:["futures_util::sink::fanout::Fanout"]},{text:"impl&lt;Si, E&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/sink/struct.SinkErrInto.html\" title=\"struct futures_util::sink::SinkErrInto\">SinkErrInto</a>&lt;Si, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Si: <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Si::<a class=\"type\" href=\"futures_sink/trait.Sink.html#associatedtype.SinkError\" title=\"type futures_sink::Sink::SinkError\">SinkError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;E&gt;,&nbsp;</span>",synthetic:false,types:["futures_util::sink::err_into::SinkErrInto"]},{text:"impl&lt;Si, F, E&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/sink/struct.SinkMapErr.html\" title=\"struct futures_util::sink::SinkMapErr\">SinkMapErr</a>&lt;Si, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Si: <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(Si::<a class=\"type\" href=\"futures_sink/trait.Sink.html#associatedtype.SinkError\" title=\"type futures_sink::Sink::SinkError\">SinkError</a>) -&gt; E,&nbsp;</span>",synthetic:false,types:["futures_util::sink::map_err::SinkMapErr"]},{text:"impl&lt;Si, U, Fut, F, E&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/sink/struct.With.html\" title=\"struct futures_util::sink::With\">With</a>&lt;Si, U, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Si: <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(U) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Si::<a class=\"type\" href=\"futures_sink/trait.Sink.html#associatedtype.SinkItem\" title=\"type futures_sink::Sink::SinkItem\">SinkItem</a>, E&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Si::<a class=\"type\" href=\"futures_sink/trait.Sink.html#associatedtype.SinkError\" title=\"type futures_sink::Sink::SinkError\">SinkError</a>&gt;,&nbsp;</span>",synthetic:false,types:["futures_util::sink::with::With"]},{text:"impl&lt;Si, U, St, F&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/sink/struct.WithFlatMap.html\" title=\"struct futures_util::sink::WithFlatMap\">WithFlatMap</a>&lt;Si, U, St, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Si: <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(U) -&gt; St,<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Si::<a class=\"type\" href=\"futures_sink/trait.Sink.html#associatedtype.SinkItem\" title=\"type futures_sink::Sink::SinkItem\">SinkItem</a>, Si::<a class=\"type\" href=\"futures_sink/trait.Sink.html#associatedtype.SinkError\" title=\"type futures_sink::Sink::SinkError\">SinkError</a>&gt;&gt;,&nbsp;</span>",synthetic:false,types:["futures_util::sink::with_flat_map::WithFlatMap"]},{text:"impl&lt;Si:&nbsp;<a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&gt; <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a> for <a class=\"struct\" href=\"futures_util/sink/struct.Buffer.html\" title=\"struct futures_util::sink::Buffer\">Buffer</a>&lt;Si&gt;",synthetic:false,types:["futures_util::sink::buffer::Buffer"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
