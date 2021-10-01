<template>
  <Default>
    <div class="achievements">
      <h2>ACHIEVEMENTS</h2>
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>tournament</th>
            <th>oponent</th>
            <th>result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16.10.2020</td>
            <td>kayzer single elimination</td>
            <td>4 vrienden & Jasper</td>
            <td>9 - 16</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Default>
</template>

<script>
export default {
  name: "Achievements",
};
</script>
<style lang='scss'>
.achievements {
  padding: 0 60px 40px;
  border-bottom: 2px solid #3a3c42;
}

.achievements table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}

.achievements th,
.achievements td {
  padding: 0.5em 0;
}

.achievements th {
  font-size: 1.5em;
  color: #717686;
}
</style>