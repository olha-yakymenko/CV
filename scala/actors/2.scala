import org.apache.pekko.actor.{Actor, ActorRef, Props, ActorSystem}
 case object Piłeczka
case class Graj01(przeciwnik: ActorRef)

class Gracz01 extends Actor {
    def receive : Receive = {
        case Graj01(przeciwnik) =>
        println ("Ping!")
        przeciwnik ! Piłeczka 
        context.become(odbijanie(przeciwnik))
        case Piłeczka => 
            println("Pong")
            sender() ! Piłeczka
    }



    def odbijanie(przeciwnik: ActorRef) : Receive = {
    case Piłeczka => 
    println("Ping!")
    przeciwnik ! Piłeczka 
    }
}
@main
def zad1:Unit = {
val system = ActorSystem("PingPongSystem")
val gracz1 = system.actorOf(Props[Gracz01](), name="gracz01")
val gracz02 = system.actorOf(Props[Gracz01](), name = "gracz02")
gracz1 ! Graj01(gracz02)
}
