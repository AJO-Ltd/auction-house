import { Maybe } from "@formfunction-hq/formfunction-program-shared";
import { ParsedTransactionWithMeta, PublicKey } from "@solana/web3.js";
export default function findTxsWithTransfer(txs: Array<Maybe<ParsedTransactionWithMeta>>, signatures: Array<string>, tokenMint: PublicKey): import("../../types/NftTransaction").default[];
//# sourceMappingURL=findTxsWithTransfer.d.ts.map