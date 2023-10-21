import { Keypair, PublicKey } from "@solana/web3.js";
import AuctionHouseSdk from "solana/auction-house/AuctionHouseSdk";
import PriceFunctionType from "types/enum/PriceFunctionType";
export default function getEditionDistributorSetup({ antiBotAuthority, antiBotProtectionEnabled, auctionHouseConfigArg, maxSupply, multipleCreators, priceFunctionType, priceParams, limitPerAddress, publicSaleStartTime, saleEndTime, allowlistSalePrice, allowlistSaleStartTime, startingPriceLamports, }: {
    allowlistSalePrice?: number;
    allowlistSaleStartTime?: number;
    antiBotAuthority?: PublicKey;
    antiBotProtectionEnabled?: boolean;
    auctionHouseConfigArg?: {
        basisPoints: number;
        basisPointsSecondary: number;
        treasuryWithdrawalDestinationOwner: PublicKey;
    };
    limitPerAddress?: number;
    maxSupply?: number;
    multipleCreators?: boolean;
    priceFunctionType: PriceFunctionType;
    priceParams: Array<number>;
    publicSaleStartTime?: number;
    saleEndTime?: number;
    startingPriceLamports: number;
}): Promise<{
    auctionHouseAccount: {
        auctionHouseFeeAccount: PublicKey;
        auctionHouseTreasury: PublicKey;
        treasuryWithdrawalDestination: PublicKey;
        feeWithdrawalDestination: PublicKey;
        treasuryMint: PublicKey;
        authority: PublicKey;
        creator: PublicKey;
        bump: number;
        treasuryBump: number;
        feePayerBump: number;
        sellerFeeBasisPoints: number;
        requiresSignOff: boolean;
        canChangeSalePrice: boolean;
        sellerFeeBasisPointsSecondary: number;
        payAllFees: boolean;
        merkleRoots: unknown;
        numberBought: number;
        numberBoughtAllowlist: number;
        masterEditionMint: PublicKey;
        owner: PublicKey;
        priceFunction: {
            startingPriceLamports: import("bn.js");
            priceFunctionType: {
                constant?: Record<string, never> | undefined;
                linear?: Record<string, never> | undefined;
                minimum?: Record<string, never> | undefined;
            };
            params: number[];
        };
        publicSaleStartTime: import("bn.js");
        saleEndTime: import("bn.js") | null;
        antiBotProtectionEnabled: boolean;
        limitPerAddress: number;
        allowlistSaleStartTime: import("bn.js") | null;
        allowlistSalePrice: import("bn.js") | null;
        allowlistNumberSold: import("bn.js");
        price: import("bn.js");
        bidder: PublicKey | null;
        hasBeenSold: number;
        tickSizeConstantInLamports: import("bn.js");
        hasCampaignEscrowTreasury: boolean;
    };
    auctionHouseSdk: AuctionHouseSdk;
    editionDistributor: PdaResult;
    metadataData: import("@metaplex-foundation/mpl-token-metadata").DataV2;
    nftOwner: Keypair;
    nftOwnerTokenAccount: any;
    programCreator: Keypair;
    remainingAccounts: {
        isSigner: boolean;
        isWritable: boolean;
        pubkey: PublicKey;
    }[];
    tokenMint: any;
}>;
//# sourceMappingURL=getEditionDistributorSetup.d.ts.map