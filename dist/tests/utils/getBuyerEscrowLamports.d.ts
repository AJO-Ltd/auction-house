import { Connection, PublicKey } from "@solana/web3.js";
import AuctionHouseSdk from "solana/auction-house/AuctionHouseSdk";
export default function getBuyerEscrowLamports(connection: Connection, sdk: AuctionHouseSdk, walletBuyer: import("@solana/web3.js").Keypair | undefined, tokenMint: PublicKey): Promise<number>;
//# sourceMappingURL=getBuyerEscrowLamports.d.ts.map