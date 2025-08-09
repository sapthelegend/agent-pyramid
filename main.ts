player.onChat("pyramid", function (size) {
    if (size > 0) {
        agent.setItem(SANDSTONE, size * size, 1)
        agent.setSlot(1)
        agent.setAssist(PLACE_ON_MOVE, true)
        for (let i = 0; i <= 4 - 1; i++) {
            agent.move(FORWARD, size)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(FORWARD, 1)
        player.runChatCommand("pyramid " + (size - 2))
    }
})
