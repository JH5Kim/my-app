import {useWeb3React} from '@web3-react/core';
import {injected} from './lib/connectors';

const App = () => {
	const {
		chainId,
		account,
		active,
		activate,
		deactivate
	} = useWeb3React();

	const handleConnect = () => {
		if(active) {
			deactivate();
			return;
		}

		activate(injected,()=>{
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if('/No Ethereum provider was found on window.ethereum/'.test(err)){
				window.open('https://metamask.io/download.html');
			}
		});
	};

	return (
		<div>
			<div>
				<p>Account: {account}</p>
				<p>ChainId: {chainId}</p>
			</div>
			<div>
				<button type="button" onClick={handleConnect}>{active?'disconnect':'connect'}</button>
			</div>
		</div>
	);
};

export default App;
