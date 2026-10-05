export type View = 'login' | 'dashboard' | 'accounts' | 'account' | 'transfers' | 'bill-pay' | 'documents' | 'pay-loan' | 'messages';

export interface Account {
  id: string;
  name: string;
  number: string;
  balance: number;
  isPrimary?: boolean;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  status: 'Pending' | 'Posted';
  account: string;
  amount: number;
}

export interface AccountDetail {
  accountId: string;
  accountNumber: string;
  routingNumber: string;
  owner: string;
  otherNames?: string;
  dateOpened: string;
  lastStatementBalance: string;
  dateOfLastStatement: string;
  dateOfLastDeposit: string;
  rate: string;
  accrued: string;
  paidYtd: string;
  paidLastYear: string;
}

export const user = {
  firstName: 'Kathleen',
  fullName: 'Kathleen West',
  initials: 'KW',
};

export const accounts: Account[] = [
  { id: 'asw', name: 'ASW', number: 'x6675', balance: 4615.6 },
  { id: 'jdw', name: 'JDW', number: 'x6072', balance: 11007.52 },
  { id: 'kew', name: 'KEW', number: 'x2487', balance: 86712.61 },
  { id: 'now', name: 'NOW ACCT 5389', number: 'x5389', balance: 285123.63, isPrimary: true },
  { id: 'play', name: 'Play', number: 'x6592', balance: 23895.42 },
  { id: 'yellow', name: 'Yellow', number: 'x6212', balance: 5519.26 },
];

export const accountDetails: AccountDetail[] = [
  {
    accountId: 'asw',
    accountNumber: '4106675',
    routingNumber: '111901946',
    owner: 'KATHLEEN WEST',
    dateOpened: '5/18/2012',
    lastStatementBalance: '$4,615.60',
    dateOfLastStatement: '9/30/2026',
    dateOfLastDeposit: '5/5/2026',
    rate: '0.300%',
    accrued: '$0.15',
    paidYtd: '$16.86',
    paidLastYear: '$23.18',
  },
  {
    accountId: 'now',
    accountNumber: '205389',
    routingNumber: '111901946',
    owner: 'KATHLEEN WEST',
    otherNames: 'ARTHUR S WEST',
    dateOpened: '4/8/2004',
    lastStatementBalance: '$284,894.63',
    dateOfLastStatement: '9/30/2026',
    dateOfLastDeposit: '9/29/2026',
    rate: '0.300%',
    accrued: '$9.13',
    paidYtd: '$614.88',
    paidLastYear: '$763.11',
  },
  {
    accountId: 'kew',
    accountNumber: '4102487',
    routingNumber: '111901946',
    owner: 'KATHLEEN WEST',
    dateOpened: '4/30/2004',
    lastStatementBalance: '$86,712.61',
    dateOfLastStatement: '9/30/2026',
    dateOfLastDeposit: '5/5/2026',
    rate: '0.300%',
    accrued: '$2.85',
    paidYtd: '$193.98',
    paidLastYear: '$258.03',
  },
  {
    accountId: 'jdw',
    accountNumber: '4106072',
    routingNumber: '111901946',
    owner: 'KATHLEEN WEST',
    otherNames: 'RENT ACCOUNT',
    dateOpened: '9/21/2006',
    lastStatementBalance: '$11,007.52',
    dateOfLastStatement: '9/30/2026',
    dateOfLastDeposit: '7/3/2026',
    rate: '0.300%',
    accrued: '$0.36',
    paidYtd: '$24.51',
    paidLastYear: '$32.42',
  },
  {
    accountId: 'yellow',
    accountNumber: '4106212',
    routingNumber: '111901946',
    owner: 'KATHLEEN WEST',
    otherNames: 'RENT ACCOUNT',
    dateOpened: '11/15/2007',
    lastStatementBalance: '$5,519.26',
    dateOfLastStatement: '9/30/2026',
    dateOfLastDeposit: '5/5/2026',
    rate: '0.300%',
    accrued: '$0.18',
    paidYtd: '$12.27',
    paidLastYear: '$16.65',
  },
  {
    accountId: 'play',
    accountNumber: '4106592',
    routingNumber: '111901946',
    owner: 'KATHLEEN WEST',
    dateOpened: '8/17/2011',
    lastStatementBalance: '$23,895.42',
    dateOfLastStatement: '9/30/2026',
    dateOfLastDeposit: '8/24/2026',
    rate: '0.300%',
    accrued: '$0.79',
    paidYtd: '$52.54',
    paidLastYear: '$65.06',
  },
];

export const transactions: Transaction[] = [
  { id: '6', date: 'Oct 5', description: 'Refund from CNB Main branch', status: 'Posted', account: 'NOW ACCT 5389', amount: 10000.0 },
  { id: '1', date: 'Oct 2', description: 'KO STORAGE NAPLE 4305629793 ACH EOD PR...', status: 'Pending', account: 'NOW ACCT 5389', amount: -261.0 },
  { id: '2', date: 'Oct 2', description: 'DDA PAY FIRST ITEM', status: 'Posted', account: 'NOW ACCT 5389', amount: -5500.0 },
  { id: '3', date: 'Oct 2', description: 'WIRE TRANSFER TO LUIS GREGORIO SUAREZ', status: 'Posted', account: 'NOW ACCT 5389', amount: -3990.0 },
  { id: '4', date: 'Oct 2', description: 'WIRE TRANSFER FEE', status: 'Posted', account: 'NOW ACCT 5389', amount: -20.0 },
  { id: '5', date: 'Sep 30', description: 'INTEREST PAID 30', status: 'Posted', account: 'NOW ACCT 5389', amount: 69.57 },
];

export const accountTransactions: Record<string, Transaction[]> = {
  asw: [
    { id: 'asw-1', date: 'Sep 30', description: 'INTEREST PAID 92', status: 'Posted', account: 'ASW', amount: 4.25 },
    { id: 'asw-2', date: 'Jul 24', description: 'SAVINGS REGULAR DEBIT', status: 'Posted', account: 'ASW', amount: -4000.0 },
    { id: 'asw-3', date: 'Jun 30', description: 'INTEREST PAID 91', status: 'Posted', account: 'ASW', amount: 6.4 },
    { id: 'asw-4', date: 'May 5', description: 'TRANSFER FROM X5389 TO X6675', status: 'Posted', account: 'ASW', amount: 100.0 },
    { id: 'asw-5', date: 'Apr 3', description: 'TRANSFER FROM X5389 TO X6675', status: 'Posted', account: 'ASW', amount: 100.0 },
    { id: 'asw-6', date: 'Mar 31', description: 'INTEREST PAID 90', status: 'Posted', account: 'ASW', amount: 6.21 },
    { id: 'asw-7', date: 'Dec 31, 2025', description: 'INTEREST PAID 92', status: 'Posted', account: 'ASW', amount: 6.35 },
    { id: 'asw-8', date: 'Sep 30, 2025', description: 'INTEREST PAID 92', status: 'Posted', account: 'ASW', amount: 6.34 },
    { id: 'asw-9', date: 'Jun 30, 2025', description: 'INTEREST PAID 91', status: 'Posted', account: 'ASW', amount: 5.41 },
    { id: 'asw-10', date: 'Apr 21, 2025', description: 'SAVINGS REGULAR DEPOSIT', status: 'Posted', account: 'ASW', amount: 5000.0 },
    { id: 'asw-11', date: 'Mar 31, 2025', description: 'INTEREST PAID 90', status: 'Posted', account: 'ASW', amount: 5.08 },
  ],
  now: [
    { id: 'now-1', date: 'Oct 5', description: 'Refund from CNB Main branch', status: 'Posted', account: 'NOW ACCT 5389', amount: 10000.0 },
    { id: 'now-2', date: 'Oct 2', description: 'KO STORAGE NAPLE 4305629793 ACH EOD PROCESSI...', status: 'Pending', account: 'NOW ACCT 5389', amount: -261.0 },
    { id: 'now-3', date: 'Oct 2', description: 'DDA PAY FIRST ITEM', status: 'Posted', account: 'NOW ACCT 5389', amount: -5500.0 },
    { id: 'now-4', date: 'Oct 2', description: 'WIRE TRANSFER TO LUIS GREGORIO SUAREZ', status: 'Posted', account: 'NOW ACCT 5389', amount: -3990.0 },
    { id: 'now-5', date: 'Oct 2', description: 'WIRE TRANSFER FEE', status: 'Posted', account: 'NOW ACCT 5389', amount: -20.0 },
    { id: 'now-6', date: 'Sep 30', description: 'INTEREST PAID 30', status: 'Posted', account: 'NOW ACCT 5389', amount: 69.57 },
    { id: 'now-7', date: 'Sep 29', description: "New York State Teachers' Retirement System", status: 'Posted', account: 'NOW ACCT 5389', amount: 1533.92 },
    { id: 'now-8', date: 'Sep 29', description: 'DDA INC CLEAR CHECK | SERIAL 8461', status: 'Posted', account: 'NOW ACCT 5389', amount: -125.0 },
    { id: 'now-9', date: 'Sep 25', description: 'DDA INC CLEAR CHECK | SERIAL 8459', status: 'Posted', account: 'NOW ACCT 5389', amount: -50.0 },
    { id: 'now-10', date: 'Sep 23', description: 'Walmart', status: 'Posted', account: 'NOW ACCT 5389', amount: -68.55 },
    { id: 'now-11', date: 'Sep 24', description: 'American Electric Power', status: 'Posted', account: 'NOW ACCT 5389', amount: -50.0 },
    { id: 'now-12', date: 'Sep 22', description: 'DDA INC CLEAR CHECK | SERIAL 8457', status: 'Posted', account: 'NOW ACCT 5389', amount: -101.86 },
  ],
  kew: [
    { id: 'kew-1', date: 'Sep 30', description: 'INTEREST PAID 92', status: 'Posted', account: 'KEW', amount: 65.52 },
    { id: 'kew-2', date: 'Jun 30', description: 'INTEREST PAID 91', status: 'Posted', account: 'KEW', amount: 64.68 },
    { id: 'kew-3', date: 'May 5', description: 'TRANSFER FROM X5389 TO X2487', status: 'Posted', account: 'KEW', amount: 300.0 },
    { id: 'kew-4', date: 'Mar 31', description: 'INTEREST PAID 90', status: 'Posted', account: 'KEW', amount: 63.78 },
    { id: 'kew-5', date: 'Dec 31, 2025', description: 'INTEREST PAID 92', status: 'Posted', account: 'KEW', amount: 65.14 },
    { id: 'kew-6', date: 'Sep 30, 2025', description: 'INTEREST PAID 92', status: 'Posted', account: 'KEW', amount: 65.1 },
    { id: 'kew-7', date: 'Jun 30, 2025', description: 'INTEREST PAID 91', status: 'Posted', account: 'KEW', amount: 64.27 },
    { id: 'kew-8', date: 'Jun 24, 2025', description: 'TRANSFER FROM X5389 TO X2487', status: 'Posted', account: 'KEW', amount: 100.0 },
    { id: 'kew-9', date: 'Mar 31, 2025', description: 'INTEREST PAID 90', status: 'Posted', account: 'KEW', amount: 63.52 },
  ],
  jdw: [
    { id: 'jdw-1', date: 'Sep 30', description: 'INTEREST PAID 92', status: 'Posted', account: 'JDW', amount: 8.31 },
    { id: 'jdw-2', date: 'Jul 3', description: 'TRANSFER FROM X5389 TO X6072', status: 'Posted', account: 'JDW', amount: 100.0 },
    { id: 'jdw-3', date: 'Jun 30', description: 'INTEREST PAID 91', status: 'Posted', account: 'JDW', amount: 8.15 },
    { id: 'jdw-4', date: 'Mar 31', description: 'INTEREST PAID 90', status: 'Posted', account: 'JDW', amount: 8.05 },
    { id: 'jdw-5', date: 'Dec 31, 2025', description: 'INTEREST PAID 92', status: 'Posted', account: 'JDW', amount: 8.22 },
    { id: 'jdw-6', date: 'Sep 30, 2025', description: 'INTEREST PAID 92', status: 'Posted', account: 'JDW', amount: 8.2 },
    { id: 'jdw-7', date: 'Jun 30, 2025', description: 'INTEREST PAID 91', status: 'Posted', account: 'JDW', amount: 8.05 },
    { id: 'jdw-8', date: 'Jul 21, 2025', description: 'TRANSFER FROM X5389 TO X6072', status: 'Posted', account: 'JDW', amount: 100.0 },
    { id: 'jdw-9', date: 'Mar 31, 2025', description: 'INTEREST PAID 90', status: 'Posted', account: 'JDW', amount: 7.95 },
  ],
  yellow: [
    { id: 'yellow-1', date: 'Sep 30', description: 'INTEREST PAID 92', status: 'Posted', account: 'Yellow', amount: 4.17 },
    { id: 'yellow-2', date: 'Jun 30', description: 'INTEREST PAID 91', status: 'Posted', account: 'Yellow', amount: 4.1 },
    { id: 'yellow-3', date: 'May 5', description: 'TRANSFER FROM X5389 TO X6212', status: 'Posted', account: 'Yellow', amount: 100.0 },
    { id: 'yellow-4', date: 'Mar 31', description: 'INTEREST PAID 90', status: 'Posted', account: 'Yellow', amount: 4.0 },
    { id: 'yellow-5', date: 'Dec 31, 2025', description: 'INTEREST PAID 92', status: 'Posted', account: 'Yellow', amount: 4.08 },
    { id: 'yellow-6', date: 'Sep 30, 2025', description: 'INTEREST PAID 92', status: 'Posted', account: 'Yellow', amount: 4.08 },
    { id: 'yellow-7', date: 'Jun 30, 2025', description: 'INTEREST PAID 91', status: 'Posted', account: 'Yellow', amount: 4.17 },
    { id: 'yellow-8', date: 'May 7, 2025', description: 'SAVINGS REGULAR DEBIT', status: 'Posted', account: 'Yellow', amount: -450.0 },
    { id: 'yellow-9', date: 'Jun 21, 2025', description: 'INTEREST PAID 90', status: 'Posted', account: 'Yellow', amount: 4.32 },
  ],
  play: [
    { id: 'play-1', date: 'Sep 30', description: 'INTEREST PAID 92', status: 'Posted', account: 'Play', amount: 17.83 },
    { id: 'play-2', date: 'Aug 24', description: 'TRANSFER FROM X5389 TO X6592', status: 'Posted', account: 'Play', amount: 1350.0 },
    { id: 'play-3', date: 'Aug 4', description: 'SAVINGS REGULAR DEBIT', status: 'Posted', account: 'Play', amount: -1350.0 },
    { id: 'play-4', date: 'Jun 30', description: 'INTEREST PAID 91', status: 'Posted', account: 'Play', amount: 17.58 },
    { id: 'play-5', date: 'May 29', description: 'SAVINGS REGULAR DEPOSIT', status: 'Posted', account: 'Play', amount: 300.0 },
    { id: 'play-6', date: 'Apr 29', description: 'EDI PAYMENT AEIL NS NY 6908', status: 'Posted', account: 'Play', amount: 390.49 },
    { id: 'play-7', date: 'Mar 31', description: 'INTEREST PAID 90', status: 'Posted', account: 'Play', amount: 17.13 },
    { id: 'play-8', date: 'Dec 31, 2025', description: 'INTEREST PAID 92', status: 'Posted', account: 'Play', amount: 16.91 },
  ],
};

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}
