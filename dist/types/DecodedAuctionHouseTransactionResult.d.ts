/**
 * NOTE: This is an auto-generated file. Don't edit it directly.
 */
import { DecodedInstructionAccount, GenericDecodedTransaction } from "@formfunction-hq/formfunction-program-shared";
import AuctionHouseInstructionName from "types/AuctionHouseInstructionName";
declare const AppendEditionAllowlistMerkleRootsAccounts: ("auctionHouse" | "authority" | "editionAllowlistSettings" | "editionDistributor" | "systemProgram")[];
declare const BuyEditionV2Accounts: ("auctionHouse" | "auctionHouseFeeAccount" | "auctionHouseTreasury" | "treasuryMint" | "authority" | "editionAllowlistSettings" | "editionBuyerInfoAccount" | "editionDistributor" | "owner" | "systemProgram" | "mint" | "buyer" | "masterEditionMetadata" | "masterEditionPda" | "limitedEditionMint" | "limitedEditionMetadata" | "limitedEditionPda" | "editionMarkerPda" | "masterEditionTokenAccount" | "tokenMetadataProgram" | "tokenProgram" | "rent" | "antiBotAuthority" | "ataProgram" | "buyerTokenAccount" | "buyerPaymentTokenAccount" | "sellerPaymentReceiptTokenAccount")[];
declare const BuyV2Accounts: ("auctionHouse" | "auctionHouseFeeAccount" | "treasuryMint" | "authority" | "lastBidPrice" | "systemProgram" | "tokenProgram" | "rent" | "ataProgram" | "wallet" | "paymentAccount" | "transferAuthority" | "tokenAccount" | "metadata" | "escrowPaymentAccount" | "buyerTradeState" | "tokenMint" | "clock" | "previousBidderWallet" | "previousBidderEscrowPaymentAccount" | "previousBidderRefundAccount")[];
declare const CancelV2Accounts: ("auctionHouse" | "auctionHouseFeeAccount" | "authority" | "tokenProgram" | "wallet" | "tokenAccount" | "tokenMint" | "tradeState" | "programAsSigner" | "masterEdition" | "metaplexTokenMetadataProgram")[];
declare const ClearEditionAllowlistMerkleRootsAccounts: ("auctionHouse" | "authority" | "editionAllowlistSettings" | "editionDistributor")[];
declare const CloseEditionAllowlistSettingsAccountAccounts: ("auctionHouse" | "authority" | "editionAllowlistSettings" | "editionDistributor" | "rentReceiver")[];
declare const CloseEditionDistributorAccounts: ("auctionHouse" | "authority" | "editionDistributor" | "masterEditionMint" | "owner" | "rentReceiver")[];
declare const CloseEditionDistributorTokenAccountAccounts: ("auctionHouse" | "authority" | "editionDistributor" | "masterEditionMint" | "owner" | "tokenProgram" | "rentReceiver" | "editionDistributorTokenAccount" | "tokenReceiver")[];
declare const CreateAuctionHouseAccounts: ("auctionHouse" | "auctionHouseFeeAccount" | "auctionHouseTreasury" | "treasuryWithdrawalDestination" | "feeWithdrawalDestination" | "treasuryMint" | "authority" | "systemProgram" | "tokenProgram" | "rent" | "ataProgram" | "payer" | "treasuryWithdrawalDestinationOwner")[];
declare const CreateEditionDistributorAccounts: ("treasuryMint" | "editionDistributor" | "owner" | "systemProgram" | "mint" | "tokenAccount" | "masterEdition")[];
declare const CreateLastBidPriceAccounts: ("auctionHouse" | "lastBidPrice" | "systemProgram" | "wallet" | "tokenMint")[];
declare const CreateTradeStateAccounts: ("auctionHouse" | "auctionHouseFeeAccount" | "authority" | "systemProgram" | "rent" | "wallet" | "tokenAccount" | "tokenMint" | "tradeState")[];
declare const DepositAccounts: ("auctionHouse" | "auctionHouseFeeAccount" | "treasuryMint" | "authority" | "systemProgram" | "tokenProgram" | "rent" | "wallet" | "paymentAccount" | "transferAuthority" | "escrowPaymentAccount" | "tokenMint")[];
declare const ExecuteSaleV2Accounts: ("auctionHouse" | "auctionHouseFeeAccount" | "auctionHouseTreasury" | "treasuryMint" | "authority" | "lastBidPrice" | "systemProgram" | "buyer" | "tokenProgram" | "rent" | "ataProgram" | "tokenAccount" | "metadata" | "escrowPaymentAccount" | "buyerTradeState" | "tokenMint" | "programAsSigner" | "masterEdition" | "metaplexTokenMetadataProgram" | "seller" | "sellerPaymentReceiptAccount" | "buyerReceiptTokenAccount" | "sellerTradeState" | "freeTradeState")[];
declare const SellAccounts: ("auctionHouse" | "auctionHouseFeeAccount" | "authority" | "systemProgram" | "tokenProgram" | "rent" | "wallet" | "tokenAccount" | "metadata" | "tokenMint" | "programAsSigner" | "masterEdition" | "metaplexTokenMetadataProgram" | "sellerTradeState" | "freeSellerTradeState")[];
declare const SetEditionDistributorBotProtectionEnabledAccounts: ("auctionHouse" | "authority" | "editionDistributor" | "owner" | "mint")[];
declare const SetEditionDistributorLimitPerAddressAccounts: ("auctionHouse" | "authority" | "editionDistributor" | "owner")[];
declare const SetHasBeenSoldAccounts: ("auctionHouse" | "authority" | "lastBidPrice" | "tokenMint")[];
declare const SetLastBidPriceAccounts: ("auctionHouse" | "authority" | "owner" | "lastBidPrice" | "tokenAccount")[];
declare const SetPreviousBidderAccounts: ("auctionHouse" | "authority" | "lastBidPrice" | "tokenMint")[];
declare const SetTickSizeAccounts: ("auctionHouse" | "treasuryMint" | "authority" | "owner" | "lastBidPrice" | "mint" | "tokenAccount")[];
declare const ThawDelegatedAccountAccounts: ("auctionHouse" | "authority" | "tokenProgram" | "tokenAccount" | "tokenMint" | "programAsSigner" | "masterEdition" | "metaplexTokenMetadataProgram" | "seller")[];
declare const UpdateAuctionHouseAccounts: ("auctionHouse" | "treasuryWithdrawalDestination" | "feeWithdrawalDestination" | "treasuryMint" | "authority" | "systemProgram" | "tokenProgram" | "rent" | "ataProgram" | "payer" | "treasuryWithdrawalDestinationOwner" | "newAuthority")[];
declare const UpdateEditionDistributorAccounts: ("treasuryMint" | "editionDistributor" | "owner" | "mint" | "masterEdition")[];
declare const WithdrawAccounts: ("auctionHouse" | "auctionHouseFeeAccount" | "treasuryMint" | "authority" | "systemProgram" | "tokenProgram" | "rent" | "ataProgram" | "wallet" | "escrowPaymentAccount" | "tokenMint" | "receiptAccount")[];
declare const WithdrawBonkAccounts: ("auctionHouse" | "authority" | "editionDistributor" | "masterEditionMint" | "tokenProgram" | "editionDistributorTokenAccount" | "tokenReceiver")[];
declare const WithdrawFromFeeAccounts: ("auctionHouse" | "auctionHouseFeeAccount" | "feeWithdrawalDestination" | "authority" | "systemProgram")[];
declare const WithdrawFromTreasuryAccounts: ("auctionHouse" | "auctionHouseTreasury" | "treasuryWithdrawalDestination" | "treasuryMint" | "authority" | "systemProgram" | "tokenProgram")[];
type DecodedAuctionHouseTransactionResult = {
    appendEditionAllowlistMerkleRoots?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof AppendEditionAllowlistMerkleRootsAccounts[0]]: DecodedInstructionAccount;
        };
    };
    buyEditionV2?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof BuyEditionV2Accounts[0]]: DecodedInstructionAccount;
        };
    };
    buyV2?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof BuyV2Accounts[0]]: DecodedInstructionAccount;
        };
    };
    cancelV2?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof CancelV2Accounts[0]]: DecodedInstructionAccount;
        };
    };
    clearEditionAllowlistMerkleRoots?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof ClearEditionAllowlistMerkleRootsAccounts[0]]: DecodedInstructionAccount;
        };
    };
    closeEditionAllowlistSettingsAccount?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof CloseEditionAllowlistSettingsAccountAccounts[0]]: DecodedInstructionAccount;
        };
    };
    closeEditionDistributor?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof CloseEditionDistributorAccounts[0]]: DecodedInstructionAccount;
        };
    };
    closeEditionDistributorTokenAccount?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof CloseEditionDistributorTokenAccountAccounts[0]]: DecodedInstructionAccount;
        };
    };
    createAuctionHouse?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof CreateAuctionHouseAccounts[0]]: DecodedInstructionAccount;
        };
    };
    createEditionDistributor?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof CreateEditionDistributorAccounts[0]]: DecodedInstructionAccount;
        };
    };
    createLastBidPrice?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof CreateLastBidPriceAccounts[0]]: DecodedInstructionAccount;
        };
    };
    createTradeState?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof CreateTradeStateAccounts[0]]: DecodedInstructionAccount;
        };
    };
    deposit?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof DepositAccounts[0]]: DecodedInstructionAccount;
        };
    };
    executeSaleV2?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof ExecuteSaleV2Accounts[0]]: DecodedInstructionAccount;
        };
    };
    sell?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof SellAccounts[0]]: DecodedInstructionAccount;
        };
    };
    setEditionDistributorBotProtectionEnabled?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof SetEditionDistributorBotProtectionEnabledAccounts[0]]: DecodedInstructionAccount;
        };
    };
    setEditionDistributorLimitPerAddress?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof SetEditionDistributorLimitPerAddressAccounts[0]]: DecodedInstructionAccount;
        };
    };
    setHasBeenSold?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof SetHasBeenSoldAccounts[0]]: DecodedInstructionAccount;
        };
    };
    setLastBidPrice?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof SetLastBidPriceAccounts[0]]: DecodedInstructionAccount;
        };
    };
    setPreviousBidder?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof SetPreviousBidderAccounts[0]]: DecodedInstructionAccount;
        };
    };
    setTickSize?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof SetTickSizeAccounts[0]]: DecodedInstructionAccount;
        };
    };
    thawDelegatedAccount?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof ThawDelegatedAccountAccounts[0]]: DecodedInstructionAccount;
        };
    };
    updateAuctionHouse?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof UpdateAuctionHouseAccounts[0]]: DecodedInstructionAccount;
        };
    };
    updateEditionDistributor?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof UpdateEditionDistributorAccounts[0]]: DecodedInstructionAccount;
        };
    };
    withdraw?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof WithdrawAccounts[0]]: DecodedInstructionAccount;
        };
    };
    withdrawBonk?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof WithdrawBonkAccounts[0]]: DecodedInstructionAccount;
        };
    };
    withdrawFromFee?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof WithdrawFromFeeAccounts[0]]: DecodedInstructionAccount;
        };
    };
    withdrawFromTreasury?: GenericDecodedTransaction<AuctionHouseInstructionName> & {
        accountsMap: {
            [Key in typeof WithdrawFromTreasuryAccounts[0]]: DecodedInstructionAccount;
        };
    };
};
export default DecodedAuctionHouseTransactionResult;
//# sourceMappingURL=DecodedAuctionHouseTransactionResult.d.ts.map