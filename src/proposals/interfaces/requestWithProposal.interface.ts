import { Request } from 'express';
import { Proposal } from '../entities/proposal.entity';


interface RequestWithProposal extends Request {
  proposal: Proposal;
}

export default RequestWithProposal;