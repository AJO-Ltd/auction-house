import { Maybe, MaybeUndef, MerkleRoot } from "@formfunction-hq/formfunction-program-shared";
import { AccountMeta, ParsedTransactionWithMeta, PublicKey, Transaction } from "@solana/web3.js";
import { Dayjs } from "dayjs";
import AuctionHouseProgram from "../../types/AuctionHouseProgram";
import PriceFunctionType from "../../types/enum/PriceFunctionType";
import SaleType from "../../types/enum/SaleType";
import MerkleAllowlistBuyerWithProof from "../../types/merkle-tree/MerkleAllowlistBuyerWithProof";
export default class AuctionHouseSdk {
    program: AuctionHouseProgram;
    antiBotAuthority: PublicKey;
    auctionHouse: PublicKey;
    auctionHouseBump: number;
    feeAccount: PublicKey;
    feeBump: number;
    treasuryAccount: PublicKey;
    treasuryBump: number;
    treasuryMint: PublicKey;
    walletAuthority: PublicKey;
    walletCreator: PublicKey;
    constructor(program: AuctionHouseProgram, { antiBotAuthority, auctionHouse, auctionHouseBump, feeAccount, feeBump, treasuryAccount, treasuryBump, treasuryMint, walletAuthority, walletCreator, }: {
        antiBotAuthority: PublicKey;
        auctionHouse: PublicKey;
        auctionHouseBump: number;
        feeAccount: PublicKey;
        feeBump: number;
        treasuryAccount: PublicKey;
        treasuryBump: number;
        treasuryMint: PublicKey;
        walletAuthority: PublicKey;
        walletCreator: PublicKey;
    });
    static init(program: AuctionHouseProgram, { antiBotAuthority, treasuryMint, walletAuthority, walletCreator, }: {
        antiBotAuthority: PublicKey;
        treasuryMint: PublicKey;
        walletAuthority: PublicKey;
        walletCreator: PublicKey;
    }): AuctionHouseSdk;
    private createTradeState;
    private buyV2;
    buyV2Tx(accounts: {
        previousBidderWallet: PublicKey;
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, args: {
        auctionEndTime?: Dayjs;
        tokenSize?: number;
    }): Promise<Transaction>;
    buyV2InstantSaleTx(accounts: {
        previousBidderWallet: PublicKey;
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, args: {
        tokenSize?: number;
    }): Promise<Transaction>;
    buyV2MakeOfferTx(accounts: {
        previousBidderWallet: PublicKey;
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, args: {
        tokenSize?: number;
    }, shouldCreateLastBidPriceIfNotExists?: boolean): Promise<Transaction>;
    buyAndCancelTx({ oldPriceInLamports, previousBidderWallet, priceInLamports, tokenAccount, tokenMint, wallet, }: {
        oldPriceInLamports: Maybe<number>;
        previousBidderWallet: PublicKey;
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, { auctionEndTime, tokenSize, }: {
        auctionEndTime?: Dayjs;
        tokenSize?: number;
    }): Promise<Transaction>;
    cancelTx({ priceInLamports, tokenAccount, tokenMint, wallet, }: {
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, { tokenSize }: {
        tokenSize?: number;
    }): Promise<Transaction>;
    buyEditionV2Tx({ buyer, mint, newMint, }: {
        buyer: PublicKey;
        mint: PublicKey;
        newMint: PublicKey;
    }, { buyerWithAllowlistProofData, priceInLamports, }: {
        buyerWithAllowlistProofData: Maybe<MerkleAllowlistBuyerWithProof>;
        priceInLamports: number;
    }, remainingAccounts: Array<AccountMeta>): Promise<Transaction>;
    createLastBidPriceTx({ tokenMint, wallet, }: {
        tokenMint: PublicKey;
        wallet: PublicKey;
    }): Promise<Transaction>;
    private createLastBidPriceIfNotExistsTx;
    closeEditionDistributor({ mint, owner, rentReceiver, }: {
        mint: PublicKey;
        owner: PublicKey;
        rentReceiver: PublicKey;
    }): Promise<Transaction>;
    closeEditionDistributorTokenAccount({ mint, owner, rentReceiver, tokenReceiver, wallet, }: {
        mint: PublicKey;
        owner: PublicKey;
        rentReceiver: PublicKey;
        tokenReceiver: PublicKey;
        wallet: PublicKey;
    }): Promise<Transaction>;
    createTradeStateTx({ allocationSize, priceInLamports, saleType, tokenAccount, tokenMint, wallet, }: {
        allocationSize?: number;
        priceInLamports: number;
        saleType: SaleType;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }): Promise<Transaction>;
    createEditionDistributorTx({ mint, owner, tokenAccount, }: {
        mint: PublicKey;
        owner: PublicKey;
        tokenAccount: PublicKey;
    }, { allowlistSalePrice, allowlistSaleStartTime, antiBotProtectionEnabled, limitPerAddress, priceFunctionType, priceParams, publicSaleStartTime, saleEndTime, startingPriceLamports, }: {
        allowlistSalePrice: Maybe<number>;
        allowlistSaleStartTime: Maybe<number>;
        antiBotProtectionEnabled: boolean;
        limitPerAddress?: Maybe<number>;
        priceFunctionType: PriceFunctionType;
        priceParams: Array<number>;
        publicSaleStartTime: Maybe<number>;
        saleEndTime: Maybe<number>;
        startingPriceLamports: number;
    }, shouldTransferMasterEdition?: boolean): Promise<Transaction>;
    createTx({ feeWithdrawalDestination, payer, treasuryWithdrawalDestination, treasuryWithdrawalDestinationOwner, }: {
        feeWithdrawalDestination: PublicKey;
        payer: PublicKey;
        treasuryWithdrawalDestination: PublicKey;
        treasuryWithdrawalDestinationOwner: PublicKey;
    }, { basisPoints, basisPointsSecondary, canChangePrice, payAllFees, requiresSignOff, }: {
        basisPoints: number;
        basisPointsSecondary: number;
        canChangePrice: boolean;
        payAllFees: boolean;
        requiresSignOff: boolean;
    }): Promise<Transaction>;
    depositTx({ paymentAccount, tokenMint, transferAuthority, wallet, }: {
        paymentAccount?: PublicKey;
        tokenMint: PublicKey;
        transferAuthority: PublicKey;
        wallet: PublicKey;
    }, { amount }: {
        amount: number;
    }): Promise<Transaction>;
    executeSaleV2Tx({ buyerPriceInLamports, buyerReceiptTokenAccount, sellerPriceInLamports, tokenAccount, tokenMint, wallet, walletBuyer, walletCreator, walletSeller, }: {
        buyerPriceInLamports: number;
        buyerReceiptTokenAccount?: PublicKey;
        sellerPriceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
        walletBuyer: PublicKey;
        walletCreator: PublicKey;
        walletSeller: PublicKey;
    }, { tokenSize }: {
        tokenSize?: number;
    }, remainingAccounts?: Array<AccountMeta>, computeUnitLimit?: number): Promise<Transaction>;
    getNextEditionNumber(mint: PublicKey): Promise<number>;
    private sell;
    sellTx(accounts: {
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, args: {
        tokenSize?: number;
    }, shouldCreateLastBidPriceIfNotExists?: boolean): Promise<Transaction>;
    sellInstantSaleTx(accounts: {
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, args: {
        tokenSize?: number;
    }, shouldCreateLastBidPriceIfNotExists?: boolean): Promise<Transaction>;
    sellAcceptOfferTx(accounts: {
        buyerReceiptTokenAccount?: PublicKey;
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
        walletBuyer: PublicKey;
        walletCreator: PublicKey;
        walletSeller: PublicKey;
    }, args: {
        tokenSize?: number;
    }, remainingAccounts?: Array<AccountMeta>): Promise<Transaction>;
    private sellAndCancel;
    sellAndCancelTx(accounts: {
        oldPriceInLamports: number;
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, args: {
        tokenSize?: number;
    }): Promise<Transaction>;
    sellInstantSaleAndCancelTx(accounts: {
        oldPriceInLamports: number;
        priceInLamports: number;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, args: {
        tokenSize?: number;
    }): Promise<Transaction>;
    setEditionDistributorAntiBotProtectionEnabledTx(accounts: {
        mint: PublicKey;
    }, args: {
        antiBotProtectionEnabled: boolean;
    }): Promise<Transaction>;
    setEditionDistributorLimitPerAddressTx(accounts: {
        mint: PublicKey;
    }, args: {
        limitPerAddress: number;
    }): Promise<Transaction>;
    setPreviousBidderTx({ tokenMint, }: {
        tokenMint: PublicKey;
    }, { bidder }: {
        bidder: Maybe<PublicKey>;
    }): Promise<Transaction>;
    setHasBeenSoldTx({ tokenMint, }: {
        tokenMint: PublicKey;
    }, { hasBeenSold }: {
        hasBeenSold: boolean;
    }): Promise<Transaction>;
    setTickSizeTx({ owner, tokenAccount, tokenMint, }: {
        owner: PublicKey;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
    }, { tickSizeConstantInLamports }: {
        tickSizeConstantInLamports: number;
    }): Promise<Transaction>;
    thawDelegatedAccountTx({ tokenAccount, tokenMint, walletSeller, }: {
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        walletSeller: PublicKey;
    }): Promise<Transaction>;
    transferMasterEditionToDistributorTx({ mint, sourceTokenAccount, wallet, }: {
        mint: PublicKey;
        sourceTokenAccount: PublicKey;
        wallet: PublicKey;
    }): Promise<Transaction>;
    withdrawFromTreasuryTx({ treasuryWithdrawalDestination, }: {
        treasuryWithdrawalDestination: PublicKey;
    }, { amount }: {
        amount: number;
    }): Promise<Transaction>;
    updateEditionDistributorTx({ mint, owner, }: {
        mint: PublicKey;
        owner: PublicKey;
    }, { allowlistSalePrice, allowlistSaleStartTime, saleEndTime, newOwner, priceFunctionType, priceParams, startingPriceLamports, publicSaleStartTime, }: {
        allowlistSalePrice: Maybe<number>;
        allowlistSaleStartTime: Maybe<number>;
        newOwner?: MaybeUndef<PublicKey>;
        priceFunctionType?: MaybeUndef<PriceFunctionType>;
        priceParams?: MaybeUndef<Array<number>>;
        publicSaleStartTime: Maybe<number>;
        saleEndTime: Maybe<number>;
        startingPriceLamports?: MaybeUndef<number>;
    }): Promise<Transaction>;
    updateTx({ feeWithdrawalDestination, newAuthority, payer, treasuryWithdrawalDestination, treasuryWithdrawalDestinationOwner, }: {
        feeWithdrawalDestination: PublicKey;
        newAuthority: PublicKey;
        payer: PublicKey;
        treasuryWithdrawalDestination: PublicKey;
        treasuryWithdrawalDestinationOwner: PublicKey;
    }, { basisPoints, requiresSignOff, canChangePrice, basisPointsSecondary, payAllFees, }: {
        basisPoints: number;
        basisPointsSecondary: number;
        canChangePrice: boolean;
        payAllFees: boolean;
        requiresSignOff: boolean;
    }): Promise<Transaction>;
    withdrawTx({ receiptAccount, tokenMint, wallet, }: {
        receiptAccount?: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, { amount }: {
        amount: number;
    }): Promise<Transaction>;
    withdrawAndCancelTx({ receiptAccount, tokenAccount, tokenMint, wallet, }: {
        receiptAccount: PublicKey;
        tokenAccount: PublicKey;
        tokenMint: PublicKey;
        wallet: PublicKey;
    }, { amount, tokenSize, }: {
        amount: number;
        tokenSize?: number;
    }): Promise<Transaction>;
    withdrawBonkTx({ bonkTokenAccount, mint, tokenReceiver, }: {
        bonkTokenAccount: PublicKey;
        mint: PublicKey;
        tokenReceiver: PublicKey;
    }): Promise<Transaction>;
    appendEditionAllowlistMerkleRootsTx({ mint }: {
        mint: PublicKey;
    }, { merkleRoots }: {
        merkleRoots: Array<MerkleRoot>;
    }): Promise<Transaction>;
    clearEditionAllowlistMerkleRootsTx({ mint, }: {
        mint: PublicKey;
    }): Promise<Maybe<Transaction>>;
    closeEditionAllowlistSettingsAccountTx({ mint }: {
        mint: PublicKey;
    }): Promise<Transaction>;
    findBuyerEscrow(wallet: PublicKey, tokenMint: PublicKey): Promise<import("@formfunction-hq/formfunction-program-shared/dist/types/PdaResult").default>;
    findEditionDistributor(tokenMint: PublicKey): Promise<import("@formfunction-hq/formfunction-program-shared/dist/types/PdaResult").default>;
    findLastBidPrice(tokenMint: PublicKey): Promise<import("@formfunction-hq/formfunction-program-shared/dist/types/PdaResult").default>;
    findProgramAsSigner(): Promise<import("@formfunction-hq/formfunction-program-shared/dist/types/PdaResult").default>;
    findTradeState(wallet: PublicKey, tokenAccount: PublicKey, tokenMint: PublicKey, priceInLamports: number, tokenSize?: number): Promise<any>;
    static getEditionNumberFromTx(tx: ParsedTransactionWithMeta): number | null;
}
//# sourceMappingURL=AuctionHouseSdk.d.ts.map