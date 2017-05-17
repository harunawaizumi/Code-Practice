var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="CommentBox">
            Comment Box
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content');
)