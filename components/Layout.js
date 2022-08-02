import Footer from "./Footer";

import NodeWalletConnect from "@walletconnect/node";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

const walletConnector = new NodeWalletConnect(
    {
        bridge: "https://bridge.walletconnect.org", // Required
    },
    {
        clientMeta: {
            description: "WalletConnect for BUSDX",
            url: process.env.URL,
            name: "BUSDX",
        },
    }
);

const Layout = ({ children }) => {
    return (
        <>
            <main>
                {children}
                {/* <Footer /> */}
            </main>
        </>
    );
};

export default Layout;
