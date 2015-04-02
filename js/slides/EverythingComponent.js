var React = require('react');

module.exports = React.createClass({
    render() {
        var component = function (title, top, left, w, h, r, g, b) {
            var styleOverlay = {
                top: top,
                left: left,
                width: w,
                height: h,
                backgroundColor: 'rgba(' + r + ',' + g + ',' + b + ',0.8)'
            };
            var styleText = {
                top: top,
                left: left,
                zIndex: 100
            };
            return (
                <div className="fragment current-visible">
                    <div className="chat-component" style={styleOverlay}></div>
                    <div className="chat-component" style={styleText}>{"<" + title + " />"}</div>
                </div>
            );
        };

        return (
            <section>
                <h3>Everything is a Component</h3>

                <div className="rel">
                    <img src="images/chat.png" className="chat" />
                    { component("ChatApp", 45, 0, 959, 485, 255, 0, 0) }
                    { component("MessageList", 90, 280, 680, 345, 255, 0, 0) }
                    { component("MessageItem", 375, 280, 680, 48, 255, 0, 0) }
                    { component("MessageForm", 430, 280, 680, 500, 255, 0, 0) }
                    { component("ContactList", 45, 0, 280, 485, 255, 0, 0) }
                    { component("ContactItem", 180, 0, 280, 95, 255, 0, 0) }
                    { component("ContactAvatar", 190, 12, 60, 60, 255, 0, 0) }
                    { component("ContactName", 190, 65, 160, 30, 255, 0, 0) }
                </div>
            </section>
        );
    }
});