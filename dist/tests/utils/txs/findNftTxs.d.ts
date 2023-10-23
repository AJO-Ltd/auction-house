import { Maybe } from "@formfunction-hq/formfunction-program-shared";
import { ParsedTransactionWithMeta, PublicKey } from "@solana/web3.js";
export default function findNftTxs(txs: Array<Maybe<ParsedTransactionWithMeta>>, signatures: Array<string>, tokenMint: PublicKey): import("../../types/NftTransaction").default[];
//# sourceMappingURL=findNftTxs.d.ts.map