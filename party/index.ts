import { Connection } from "partykit/server";
import { PartyWorks } from "partyworks-server";

export default class LiveCursors extends PartyWorks {
  //* Eventually ping/pong will be handled by the partyworks itself
  onMessage(
    message: string | ArrayBuffer,
    sender: Connection<unknown>
  ): void | Promise<void> {
    if (message === "PING") {
      sender.send("PONG");
    }
  }
}
