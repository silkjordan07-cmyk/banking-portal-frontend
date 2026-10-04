export type View = 'login' | 'dashboard';

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

export const transactions: Transaction[] = [
  {
    id: '6',
    date: 'Oct 5',
    description: 'Refund from CNB Main branch',
    status: 'Posted',
    account: 'NOW ACCT 5389',
    amount: 10000.0,
  },
  {
    id: '1',
    date: 'Oct 2',
    description: 'KO STORAGE NAPLE 4305629793 ACH EOD PR...',
    status: 'Pending',
    account: 'NOW ACCT 5389',
    amount: -261.0,
  },
  {
    id: '2',
    date: 'Oct 2',
    description: 'DDA PAY FIRST ITEM',
    status: 'Posted',
    account: 'NOW ACCT 5389',
    amount: -5500.0,
  },
  {
    id: '3',
    date: 'Oct 2',
    description: 'WIRE TRANSFER TO LUIS GREGORIO SUAREZ',
    status: 'Posted',
    account: 'NOW ACCT 5389',
    amount: -3990.0,
  },
  {
    id: '4',
    date: 'Oct 2',
    description: 'WIRE TRANSFER FEE',
    status: 'Posted',
    account: 'NOW ACCT 5389',
    amount: -20.0,
  },
  {
    id: '5',
    date: 'Sep 30',
    description: 'INTEREST PAID 30',
    status: 'Posted',
    account: 'NOW ACCT 5389',
    amount: 69.57,
  },
];

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}
